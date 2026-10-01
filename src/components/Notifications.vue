<script setup>
const props = defineProps({
	notifyObject: Object,
});

const setClassName = () => {
	console.log(props.notifyObject);
	switch (true) {
		case props.notifyObject.warning:
			return 'warning';
			break;
		case props.notifyObject.success:
			return 'success';
			break;
		case !props.notifyObject.success:
			return 'error';
			break;
		default:
			return '';
	}
};
</script>

<template>
	<Transition name="fade">
		<main id="notification" v-if="notifyObject.message">
			<div id="notify-box" class="text-center">
				<h2 :class="setClassName()">
					{{ notifyObject.message }}
				</h2>
				<button
					class="btn"
					@click="
						notifyObject.message = '';
						notifyObject.success = false;
						notifyObject.warning = false;
					"
					title="Close notification"
				>
					Close
				</button>
			</div>
		</main>
	</Transition>
</template>

<style scoped>
#notification {
	position: fixed;
	top: 7em;
	right: 0;
	left: 0;
	bottom: 6em;
	background-color: rgb(0 0 0 / 75%);
	backdrop-filter: blur(8px);
	display: flex;
	/* align-items: center; */
	justify-content: center;
	z-index: 500;
}

#notify-box {
	padding: 1em 5em;
	margin: 4em auto;
	width: fit-content;
	height: fit-content;
	background-color: #000;
	border: 1px #ddd solid;
	border-radius: 5px;
}

.mobile #notify-box {
	width: 90%;
}

.success {
	color: #00ff00;
}
.error {
	color: #ff0000;
}
.warning {
	color: #ffff00;
}
</style>
