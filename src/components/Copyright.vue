<script setup>
const copyright = `Copyright &copy;${new Date().getFullYear()} Chris Hardwick, All Rights Reserved.`;
</script>
<template>
	<p class="copyright-notice">
		<span>Website design by</span>
		<a href="https://hardwick.design" title="Visit Hardwick Design" target="_blank" rel="noreferrer">
			<picture>
				<source type="image/webp" srcset="/icons/CSHorb-0border-32.webp" width="32" height="32" />
				<source type="image/png" srcset="/icons/CSHorb-0border-32.png" width="32" height="32" />
				<img src="/icons/CSHorb-0border-32.png" alt="Visit Hardwick Design" width="32" height="32" />
			</picture>
			Hardwick Design
		</a>
	</p>
	<p v-html="copyright" class="text-center copyright"></p>
</template>

<style scoped>
.copyright-notice {
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	margin-top: 1em;
}

.copyright-notice a {
	display: flex;
	align-items: center;
	margin-left: 0.25em;
}

.copyright-notice a img {
	margin-right: 0.25em;
}

.copyright {
	margin-bottom: 0.5em;
}
</style>
