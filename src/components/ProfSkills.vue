<template>
	<h3 class="amaranth text-center">Relevant Skills</h3>
	<div id="professional-skills">
		<div>
			<ul>
				<li>Responsive Web Development</li>
				<li>Full Stack Development</li>
				<li>HTML5</li>
				<li>CSS3</li>
				<li>Javascript</li>
				<li>jQuery</li>
				<li>ChartJS</li>
				<li>Single Page Applications</li>
				<li>SEO</li>
			</ul>
		</div>
		<div>
			<ul>
				<li>WCAG / ADA accessibility</li>
				<li>Adobe&nbsp;Creative Suite</li>
				<li>Adobe&nbsp;Photoshop</li>
				<li>Adobe&nbsp;InDesign</li>
				<li>Adobe&nbsp;Illustrator</li>
				<li>Adobe&nbsp;Dreamweaver</li>
				<li>Adobe&nbsp;Lightroom</li>
				<li>Adobe&nbsp;Premiere</li>
				<li>After&nbsp;Effects</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
#professional-skills {
	display: flex;
	flex-flow: column nowrap;
	margin: 30px;
}

@media (min-width: 1024px) {
	#professional-skills {
		display: flex;
		flex-flow: row;
		justify-content: space-evenly;
		margin: 15px;
	}
}
</style>
