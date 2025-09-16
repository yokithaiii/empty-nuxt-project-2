export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    alert(error)
  }

  // Also possible
  nuxtApp.hook('vue:error', (error, instance, info) => {
    alert(error)
  })
})