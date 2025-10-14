<script>
	import pfp from "$lib/assets/images/cv_pic.webp";
	const items = [
		// {
		// 	title: "Sulamus.ee (WIP)",
		// 	descr: "E-commerce website made with sveltekit",
		// 	slug: "sulamus",
		// },
		{
			title: "TriviaPenguin",
			descr: "Java + Angular webapp for creating and playing quizzes in real time",
			slug: "triviapenguin",
		},
		{
			title: "Skeleton Scholar",
			descr: "My final thesis - An android application for learning anatomy with the help of 3D models",
			slug: "skeletonscholar",
		},
		{
			title: "Orpheus",
			descr: "Audio player made with Electron and Vue with emphasis on customizability",
			slug: "orpheus",
		},
		{
			title: "Plant manager",
			descr: "Distributed webapp for managing houseplants",
			slug: "plantmanager",
		},
	];
</script>

<div class="main-content-wrapper">
	<div id="intro-card" class="glass">
		<div class="intro-links">
			<div>+37253013171</div>
			|
			<div>stefankivv@gmail.com</div>
			|
			<div>
				<a
					href="https://www.linkedin.com/in/stefan-kivvistik-48b81829a"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-linkedin"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
						/>
					</svg>
				</a>
			</div>
			|
			<div>
				<a href="https://github.com/stkivv">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-github"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
						/>
					</svg>
				</a>
			</div>
		</div>
		<div class="intro-content">
			<img id="profile-pic" src={pfp} alt="profile picture" />
			<div id="intro-text">
				<h1 id="intro-title" class="gradient-text">Hello world!</h1>
				<p id="intro-descr">
					My name is Stefan Kivvistik and I am frontend (well, mostly
					frontend) developer. the purpose of this page is to
					introduce my hobby projects and share some thoughts I've had
					while making them.
				</p>
			</div>
		</div>
	</div>
	{#each items as item, i}
		<a href={`/projects/${item.slug}`}>
			<div class="project-card glass">
				<h2 class="project-card-title gradient-text">{item.title}</h2>
				<div class="project-card-descr">{item.descr}</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.main-content-wrapper {
		display: flex;
		flex-direction: column;
		margin: 30px 20%;
	}

	@media (width<1000px) {
		.main-content-wrapper {
			margin: 30px;
		}
	}

	#intro-card {
		width: 100%;
		padding: 30px;
		box-sizing: border-box;
		padding-top: 10px;
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		animation: fadeIn 0.4s ease-out;
	}

	.intro-links {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		color: #c2c2c2;
		gap: 20px;
		transition: all 0.2s;
	}

	.intro-links div a {
		color: #c2c2c2;
		display: flex;
	}

	.intro-links div a:hover {
		color: white;
	}

	.intro-content {
		align-items: center;
		display: flex;
		gap: 30px;
	}

	#intro-title {
		margin-top: 5px;
	}

	#profile-pic {
		width: 175px;
		height: 175px;
		border-top-right-radius: 30%;
		border-bottom-left-radius: 30%;
		background: var(--gradient);
		padding: 5px;
	}

	.project-card {
		padding: 30px;
		width: 100%;
		box-sizing: border-box;
		border-radius: 6px;
		margin-top: 20px;
		z-index: 1;
		transition: all 0.2s;
		animation: fadeIn 0.4s ease-out;
	}

	.project-card:hover {
		cursor: pointer;
		transform: translateX(10px);
	}

	.project-card-title {
		font-size: 32px;
		margin: 0;
	}
</style>
