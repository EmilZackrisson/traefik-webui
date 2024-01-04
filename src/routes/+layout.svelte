<script lang="ts">
	import UnsavedChangesAlert from '../components/unsavedChangesAlert.svelte';
	import '../app.css';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';

	console.log($page.url.pathname);

	export let data: LayoutData;
</script>

<!-- <Sidebar /> -->

<div class="flex flex-row sm:gap-10">
	<div class="sm:w-full sm:max-w-[18rem]">
		<input type="checkbox" id="sidebar-mobile-fixed" class="sidebar-state" />
		<label for="sidebar-mobile-fixed" class="sidebar-overlay"></label>
		<aside
			class="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full"
		>
			<section class="sidebar-title items-center p-4">
				<svg
					fill="none"
					height="42"
					viewBox="0 0 32 32"
					width="42"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect height="100%" rx="16" width="100%"></rect>
					<path
						clip-rule="evenodd"
						d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
						fill="currentColor"
						fill-rule="evenodd"
					></path>
				</svg>

				<div class="flex flex-col">
					<span>Traefik WebUI</span>
				</div>
			</section>
			<section class="sidebar-content">
				<nav class="menu rounded-md">
					<section class="menu-section px-4">
						<span class="menu-title">Configure</span>
						<ul class="menu-items">
							<a href="/">
								<li class="menu-item" class:menu-active={$page.url.pathname == '/'}>
									<svg data-slot="icon" class="h-5 w-5 opacity-75" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
									<span>Home</span>
								</li>
							</a>
							<a href="/routers">
								<li class="menu-item" class:menu-active={$page.url.pathname.startsWith('/routers')}>
                                    <svg data-slot="icon" class="h-5 w-5 opacity-75" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
									<span>Routers</span>
								</li>
							</a>
							<a href="/services">
								<li
									class="menu-item"
									class:menu-active={$page.url.pathname.startsWith('/services')}
								>
                                    <svg data-slot="icon" class="h-5 w-5 opacity-75" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
									<span>Services</span>
								</li>
							</a>
							<!-- <li class="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
								</svg>
								<span>Billing</span>
							</li>
							<li>
								<input type="checkbox" id="menu-1" class="menu-toggle" />
								<label class="menu-item justify-between" for="menu-1">
									<div class="flex gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
											<path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
										</svg>
										<span>Account</span>
									</div>

									<span class="menu-icon">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
										</svg>
									</span>
								</label>

								<div class="menu-item-collapse">
									<div class="min-h-0">
										<label class="menu-item menu-item-disabled ml-6">Change Email</label>
										<label class="menu-item ml-6">Profile</label>
										<label class="menu-item ml-6">Change Password</label>
									</div>
								</div>
							</li>
						</ul>
					</section>
					<div class="divider my-0"></div>
					<section class="menu-section px-4">
						<span class="menu-title">Settings</span>
						<ul class="menu-items">
							<li class="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" class="opacity-75" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M3 21l18 0"></path>
									<path d="M3 10l18 0"></path>
									<path d="M5 6l7 -3l7 3"></path>
									<path d="M4 10l0 11"></path>
									<path d="M20 10l0 11"></path>
									<path d="M8 14l0 3"></path>
									<path d="M12 14l0 3"></path>
									<path d="M16 14l0 3"></path>
								</svg>
								Payments
							</li>
							<li class="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" class="opacity-75" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z"></path>
									<path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
									<path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2"></path>
								</svg>
								Balances
							</li>
							<li class="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" class="opacity-75" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
									<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
									<path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
								</svg>
								Customers
							</li>
							<li class="menu-item">
								<svg xmlns="http://www.w3.org/2000/svg" class="opacity-75" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M7 10l5 -6l5 6"></path>
									<path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
									<path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
								</svg>
								Products
							</li>
							<li>
								<input type="checkbox" id="menu-2" class="menu-toggle" />
								<label class="menu-item justify-between" for="menu-2">
									<div class="flex gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" class="opacity-75" width="22" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
											<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
											<path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
											<path d="M9 7l4 0"></path>
											<path d="M9 11l4 0"></path>
										</svg>
										<span>Contracts</span>
									</div>

									<span class="menu-icon">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
										</svg>
									</span>
								</label>

								<div class="menu-item-collapse">
									<div class="min-h-0">
										<label class="menu-item menu-item-disabled ml-6">Create contract</label>
										<label class="menu-item ml-6">All contracts</label>
										<label class="menu-item ml-6">Pending contracts</label>
										<label class="menu-item ml-6">Security</label>
									</div>
								</div>
							</li> -->
						</ul>
					</section>
				</nav>
			</section>
			<section class="sidebar-footer justify-end bg-gray-2 pt-2">
				<!-- <div class="divider my-0"></div> -->
				<div class="dropdown z-50 flex h-fit w-full">
					<UnsavedChangesAlert unsavedObjects={data.unsavedChanges} />
				</div>
			</section>
		</aside>
	</div>
	<div class="flex w-full flex-col p-4">
		<div class="w-fit">
			<label for="sidebar-mobile-fixed" class="btn-primary btn sm:hidden">Open Sidebar</label>
		</div>

		<slot />
		<!-- <div class="my-4 grid grid-cols-2 gap-4">
			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>

			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>
			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>
			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>
			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>
			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>
			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>
			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>
			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>
			<div class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1">+</div>
		</div> -->
	</div>
</div>
