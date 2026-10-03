<script setup>
// Define props for optional sections to display
defineProps({
	profileLink: Boolean,
	linkedinLink: Boolean,
	header: Boolean,
	bioPic: Boolean,
	quote: Boolean,
});
</script>
<template>
	<div class="footer-logo-block">
		<RouterLink v-if="profileLink" to="/about" class="profile" title="Contact Hardwick Web Design">
			<picture>
				<source type="image/webp" srcset="/img/Chris_Hardwick_200.webp" />
				<source type="image/jpeg" srcset="/img/Chris_Hardwick_200.jpg" />
				<img src="/img/Chris_Hardwick_200.jpg" class="logo" alt="Contact Hardwick Web Design" width="200" height="200" />
			</picture>
		</RouterLink>
		<div>
			<h2 v-if="header" class="amaranth center">About Chris Hardwick</h2>
			<p>
				Creative and experienced front-end and web application developer with over 10 years of experience building fluid, modern, responsive
				user experiences. Blending a strong background in graphic design, intuitive user interface architecture, and extensive experience in
				relational database optimization, I seamlessly integrate user connections to the data supporting modern web applications.
			</p>
			<p>
				With an approach rooted in mobile-first, intrinsic design, I start by building a lightweight, single-column layout for mobile. From
				there, I use CSS Grid and Flexbox to create fluid architectures that automatically adapt to changing viewports. Instead of relying
				solely on media queries at rigid device breakpoints, I use modern CSS functions like clamp(), min(), and max() for fluid typography
				and container queries for truly modular, responsive components.
			</p>
			<picture class="bio-pic" v-if="bioPic">
				<source type="image/webp" srcset="/img/Chris_Hardwick_200.webp" />
				<source type="image/jpeg" srcset="/img/Chris_Hardwick_200.jpg" />
				<img
					src="/img/Chris_Hardwick_200.jpg"
					title="Chris Hardwick, Web Designer"
					alt="Chris Hardwick, Web Designer"
					width="140"
					height="140"
				/>
			</picture>
			<p>
				I treat media queries as a tool to enhance the layout when a design naturally breaks, while ensuring performance is optimized
				through responsive images using srcset to keep load times fast on any device.
			</p>
			<p>
				With a proven track record of collaborating across teams and working independently, I continue to launch successful, production web
				ecosystems.
			</p>
			<p v-if="quote">
				"I believe in the language of striking visuals, typography, and expressive color; an art as important to expression as words and
				phrases. As a digital storyteller, I always seek evocative design elements that connect ideas with people." — Chris Hardwick
			</p>
		</div>
		<a
			v-if="linkedinLink"
			class="linkedin"
			href="https://linkedin.com/in/cs-hardwick"
			title="See Chris Hardwick on LinkedIn"
			target="_blank"
			rel="noreferrer"
		>
			<picture>
				<source type="image/webp" srcset="/icons/LinkedIn_logo_initials.webp" />
				<source type="image/png" srcset="/icons/LinkedIn_logo_initials.png" />
				<img src="/icons/LinkedIn_logo_initials.png" class="logo" alt="See Chris Hardwick on LinkedIn" />
			</picture>
		</a>
	</div>
</template>

<style scoped>
h2 {
	font-size: 2em;
}

p {
	text-indent: 1.5em;
	margin-bottom: 0.5em;
}

.center {
	text-align: center;
}

.bold,
strong {
	font-weight: bold;
}

.footer-logo-block {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	font-size: 1em;
}

.linkedin .logo,
.profile .logo {
	width: 4em;
	height: 4em;
	object-fit: contain;
	border: 1px #fff solid;
	border-radius: 8px;
}

.profile .logo {
	margin-right: 2em;
}
.linkedin .logo {
	margin-left: 2em;
}

.bio-pic {
	float: right;
	width: 140px;
	height: 140px;
	margin: 1em;
	border-radius: 0.5em;
	border: 1px #333 solid;
	object-fit: contain;
	overflow: hidden;
}
</style>
