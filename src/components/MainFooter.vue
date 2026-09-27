<script setup>
import { inject } from 'vue';
const appCurrentVersion = inject('appCurrentVersion');
defineProps({
	serverVersion: String
});

</script>

<template>

	<footer id="footer">
		<p>App Version: {{ appCurrentVersion }}</p>
	</footer>

</template>

<style scoped>
#footer {
	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;
	height: 4em;
	padding: 1em;
	overflow: hidden;
	background-color: rgb(2 6 24);
	background-image: linear-gradient(rgb(15 32 113), rgb(2 6 24) 90%);
	border-top: 1px rgb(2 6 24) solid;
	display: flex;
	align-items: center;
}
</style>
