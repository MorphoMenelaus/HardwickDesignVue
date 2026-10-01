<script setup>
import { onMounted, ref, provide, inject, watch } from 'vue';
import Notifications from '@/components/Notifications.vue';

const props = defineProps({
	isMobile: Boolean,
});

const baseUrl = inject('baseUrl');
const reCaptchaSiteKey = inject('reCaptchaSiteKey');
const showHideLoader = inject('showHideLoader');
const notifyObject = ref({
	message: '',
	success: false,
	warning: false,
});
const disabled = ref(false);
const token = ref('');
const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const maxlength = 1024;
const charRemaining = ref(maxlength);
const suggestedMessages = [
	{
		id: 0,
		buttonText: 'Website Quote',
		subject: 'I would like a website quote.',
		message: 'I would like to get some information and a quote for designing and deploying a stunning, engaging website.',
	},
	{
		id: 1,
		buttonText: 'Branding Program',
		subject: 'Can you help with my business branding?',
		message: 'How can you help my business to develop and amplify unforgettable branding?',
	},
	{
		id: 2,
		buttonText: 'Digital or Print Assets',
		subject: 'I need some vivid praphic assets for a marketing campaign.',
		message: "I need to reinforce my business' identity and create digital assets, catalogs or brochures for products and services.",
	},
];

const charCounter = () => {
	let currCount = message.value.length;
	if (charRemaining.value <= maxlength) charRemaining.value = maxlength - currCount;
};

const sendEmail = async () => {
	showHideLoader(true);
	disabled.value = true;
	try {
		let body = {
			name: name.value,
			email: email.value,
			phone: '',
			subject: subject.value,
			message: message.value,
			token: token.value,
		};

		if (!name.value || !email.value || !subject.value || !message.value) {
			console.log('Please fill in all fields.');
			notifyObject.value.message = 'Please fill in all fields.';
			notifyObject.value.warning = true;
			showHideLoader(false);
			disabled.value = false;
			return;
		}

		let headerObj = new Headers();
		headerObj.append('Content-Type', 'application/json; charset=utf-8');
		let requestUrl = new URL('/api/mail', baseUrl);

		let request = new Request(requestUrl.toString(), {
			method: 'POST',
			headers: headerObj,
			body: JSON.stringify(body),
		});

		let response = await fetch(request);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
			notifyObject.value.message = 'Error sending email. Please try again later.';
			notifyObject.value.success = false;
		}

		const data = await response.json();
		if (data.success) {
			notifyObject.value.message = data?.message || 'Email sent successfully.';
			notifyObject.value.success = data?.success || true;
			disabled.value = false;
			name.value = '';
			email.value = '';
			subject.value = '';
			message.value = '';
			charRemaining.value = maxlength;
		}
	} catch (error) {
		console.error('Error posting data:', error.message);
		notifyObject.value.message = 'Error sending email. Please try again later.';
		notifyObject.value.success = false;
	} finally {
		showHideLoader(false);
	}
};

const contactHandler = async () => {
	try {
		// Ensure the reCAPTCHA API has finished loading globally
		if (!window.grecaptcha || !window.grecaptcha.enterprise) {
			console.error('reCAPTCHA script has not loaded yet.');
			return;
		}

		// Wrap execution in grecaptcha.enterprise.ready to guarantee the library is initialized
		window.grecaptcha.enterprise.ready(async () => {
			try {
				// Execute reCAPTCHA
				token.value = await window.grecaptcha.enterprise.execute(reCaptchaSiteKey, {
					action: 'sendEmail',
				});

				await sendEmail();
			} catch (error) {
				console.error('reCAPTCHA execution failed:', error);
				notifyObject.value.message = 'Error verifying reCAPTCHA. Please try again later.';
				notifyObject.value.success = false;
			}
		});
	} catch (err) {
		console.error('Email failed:', err);
		notifyObject.value.message = 'Error sending email. Please try again later.';
		notifyObject.value.success = false;
	}
};

const handleSuggestion = (msg) => {
	subject.value = msg.subject;
	message.value = msg.message;
};

watch(message, () => {
	charCounter();
});

onMounted(() => {
	if (!document.getElementById('recaptcha-script')) {
		const script = document.createElement('script');
		script.id = 'recaptcha-script';
		script.src = `https://google.com/recaptcha/enterprise.js?render=${reCaptchaSiteKey}`;
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);
	}
});
</script>

<template>
	<main>
		<div id="view-inner">
			<div id="contact">
				<Notifications :notifyObject="notifyObject" />
				<div class="wrapper">
					<form @submit.prevent="contactHandler" method="post">
						<h4 class="amaranth">Get a quote for your next project.</h4>
						<div class="input-group">
							<label for="name" title="Name">Name</label>
							<input v-model.trim="name" id="name" type="text" name="name" class="" maxlength="128" />
						</div>
						<div class="input-group">
							<label for="email" title="Email">Email</label>
							<input v-model.trim="email" id="email" type="text" name="email" class="" maxlength="128" />
						</div>
						<div class="suggestion-buttons" v-if="!isMobile">
							<span>Suggested Messages:</span>
							<div class="sugg-btn">
								<button
									type="button"
									v-for="msg in suggestedMessages"
									:key="msg.id"
									class="btn"
									:title="msg.buttonText"
									@click="handleSuggestion(msg)"
								>
									{{ msg.buttonText }}
								</button>
							</div>
						</div>

						<div class="input-group">
							<label for="subject" title="Subject">Subject</label>
							<input v-model.trim="subject" id="subject" type="text" name="subject" class="" maxlength="128" />
						</div>
						<div class="input-group">
							<label for="message" title="Message">Message</label>
							<small>(characters remaining: {{ charRemaining }})</small>
							<textarea
								v-model.trim="message"
								id="message"
								:maxlength="maxlength"
								@keyup="charCounter()"
								type="text"
								name="message"
								class=""
							/>
						</div>
						<small class="text-center">
							Your info will not be shared with anyone. See our
							<router-link to="/about#privacy">Privacy Policy</router-link>.
						</small>
						<div class="button-group">
							<button class="btn send" type="submit" title="Send email" @click.prevent="contactHandler" :disabled="disabled">Send</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped>
#view-inner {
	padding: 1em;
}

.wrapper {
	margin: auto;
}

h1,
h2,
h3,
h4 {
	text-align: center;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 95%;
	max-width: 36em;
	margin: 1em auto 0;
	font-size: 1em;
	/* background-color: var(--color-background-mute); */
	padding: 1em;
	border-radius: 10px;
	border: 1px #333 solid;
}

.input-group {
	display: flex;
	flex-direction: column;
	margin-top: 1em;
	width: 100%;
}

.suggestion-buttons {
	display: flex;
	flex-direction: column;
	margin: 1em 0.5em -0.75em;
	text-align: center;
	width: 100%;
}
.sugg-btn {
	display: flex;
	flex-direction: column;
}

.suggestion-buttons button {
	font-size: 0.8em;
	padding: 0.25em 0.5em;
}

input,
textarea {
	font-size: 1em;
}

textarea {
	min-height: 5em;
}

.send.btn {
	padding: 0.75em 2em;
	text-transform: uppercase;
}

button:disabled {
	background-color: #808080;
	color: #434343;
	cursor: not-allowed;
}

.suggestion-buttons span {
	text-transform: uppercase;
}

@media (max-width: 767px) {
	.email-icon {
		padding-right: 52px;
	}

	.email-icon::after {
		top: 8px;
		width: 24px;
		height: 24px;
	}
}

@media (min-width: 768px) {
	form {
		font-size: 1.3em;
	}

	.sugg-btn {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
	}
}
</style>
