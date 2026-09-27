<template>

	<main>
		<div class="centered">
			<h1 id="not-found">404</h1>
			<h1>Page Not Found</h1>
			<h3>
				<p>The link may be broken, or the file has been moved.</p>
				<router-link to="/" class="btn">Return to Homepage</router-link>
			</h3>
		</div>
	</main>

</template>

<style scoped>
h1#not-found {
	font-size: 8em;
}

#not-found h1 {
	font-size: 8em;
}

h1 {
	font-size: 4em;
}

h2 {
	font-size: 1.8rem;
}

p {
	margin-bottom: 20px;
}

.centered {
	text-align: center;
}
</style>