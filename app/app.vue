<script setup lang="ts">
import { useWebAppViewport } from 'vue-tg'

onMounted(() => {
	useWebAppViewport().expand()
})
</script>

<template>
	<UApp>
		<div class="bg-[var(--ui-bg)]">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</div>
	</UApp>
</template>
