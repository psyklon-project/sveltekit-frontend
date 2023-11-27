<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;

    $: console.log(form);
</script>

<section class="form-signin text-center">
	<form method="post">
		<img
			class="mb-4"
			src="/docs/5.0/assets/brand/bootstrap-logo.svg"
			alt=""
			width="72"
			height="57"
		/>
		<h1 class="h3 mb-3 fw-normal">Please sign in</h1>

		<div class="form-floating">
			<input class="form-control" name="email" value="test@test.com" placeholder="name@example.com" />
			<label for="floatingInput">Email address</label>
		</div>
		<div class="form-floating">
			<input type="password" class="form-control" name="password" value="test" placeholder="Password" />
			<label for="floatingPassword">Password</label>
		</div>

		<div class="checkbox mb-3">
			<label>
				<input type="checkbox" value="remember-me" /> Remember me
			</label>
		</div>
		<button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
		<p class="mt-5 mb-3 text-muted">© 2017–2021</p>
	</form>
</section>

<style>
	:global(body) {
		display: flex;
		align-items: center;
		padding-top: 40px;
		padding-bottom: 40px;
		background-color: #f5f5f5;
	}

	.form-signin {
		width: 100%;
		max-width: 330px;
		padding: 15px;
		margin: auto;
	}

	.form-signin .checkbox {
		font-weight: 400;
	}

	.form-signin .form-floating:focus-within {
		z-index: 2;
	}

	.form-signin input[type='email'] {
		margin-bottom: -1px;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	.form-signin input[type='password'] {
		margin-bottom: 10px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
</style>
