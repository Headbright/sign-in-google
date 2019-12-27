<template>
    <div ref="signinBtn" class="hb-google-signin">

    </div>
</template>

<script>
    function err (msg) {
        typeof console !== 'undefined' && console.error(`[hb-google-signin] ${msg}`)
    }

    export default {
        props: {
            params: {
                type: Object,
                required: true,
                default() {
                    return {}
                }
            }
        },
        mounted() {
            if (!this.params.client_id) {
                err('params.client_id must be specified.');
                return
            }

            window.gapi.load('auth2', () => {
                const auth2 = window.gapi.auth2.init(this.params);
                auth2.attachClickHandler(this.$refs.signinBtn, {}, googleUser => {
                    this.$emit('success', googleUser)
                }, error => {
                    this.$emit('error', error)
                })
            })
        }
    }
</script>

<style>

</style>
