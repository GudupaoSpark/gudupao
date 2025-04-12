import { ref, resolveDirective, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, b as useI18n, u as useHead } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: t("nav.contact") + " | Gudupao"
    });
    const formData = ref({
      name: "",
      email: "",
      message: ""
    });
    const isSubmitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))} data-v-6d719bc3><div class="hero-section" data-v-6d719bc3><div class="container" data-v-6d719bc3><h1${ssrRenderAttrs(mergeProps({
        class: "title",
        initial: { y: 50, opacity: 0 },
        enter: { y: 0, opacity: 1, transition: { duration: 800 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-6d719bc3>${ssrInterpolate(_ctx.$t("contact.title"))}</h1><p${ssrRenderAttrs(mergeProps({
        class: "subtitle",
        initial: { y: 30, opacity: 0 },
        enter: { y: 0, opacity: 1, transition: { duration: 800, delay: 200 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-6d719bc3>${ssrInterpolate(_ctx.$t("contact.subtitle"))}</p></div></div><div class="contact-content" data-v-6d719bc3><div class="container" data-v-6d719bc3><div class="contact-grid" data-v-6d719bc3><div${ssrRenderAttrs(mergeProps({
        class: "contact-info",
        initial: { x: -50, opacity: 0 },
        enter: { x: 0, opacity: 1, transition: { duration: 800 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-6d719bc3><h2 data-v-6d719bc3>${ssrInterpolate(_ctx.$t("contact.getInTouch"))}</h2><div class="info-items" data-v-6d719bc3><div class="info-item" data-v-6d719bc3><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" data-v-6d719bc3><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" data-v-6d719bc3></path></svg><a href="mailto:official@gudupao.top" data-v-6d719bc3>official@gudupao.top</a></div><div class="info-item" data-v-6d719bc3><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" data-v-6d719bc3><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" data-v-6d719bc3></path></svg><span data-v-6d719bc3>${ssrInterpolate(_ctx.$t("footer.address"))}</span></div></div></div><form${ssrRenderAttrs(mergeProps({
        class: "contact-form",
        initial: { x: 50, opacity: 0 },
        enter: { x: 0, opacity: 1, transition: { duration: 800 } }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-6d719bc3><div class="form-group" data-v-6d719bc3><label for="name" data-v-6d719bc3>${ssrInterpolate(_ctx.$t("contact.form.name"))}</label><input type="text" id="name"${ssrRenderAttr("value", unref(formData).name)}${ssrRenderAttr("placeholder", _ctx.$t("contact.form.namePlaceholder"))} required${ssrIncludeBooleanAttr(unref(isSubmitted)) ? " disabled" : ""} data-v-6d719bc3></div><div class="form-group" data-v-6d719bc3><label for="email" data-v-6d719bc3>${ssrInterpolate(_ctx.$t("contact.form.email"))}</label><input type="email" id="email"${ssrRenderAttr("value", unref(formData).email)}${ssrRenderAttr("placeholder", _ctx.$t("contact.form.emailPlaceholder"))} required${ssrIncludeBooleanAttr(unref(isSubmitted)) ? " disabled" : ""} data-v-6d719bc3></div><div class="form-group" data-v-6d719bc3><label for="message" data-v-6d719bc3>${ssrInterpolate(_ctx.$t("contact.form.message"))}</label><textarea id="message"${ssrRenderAttr("placeholder", _ctx.$t("contact.form.messagePlaceholder"))} rows="5" required${ssrIncludeBooleanAttr(unref(isSubmitted)) ? " disabled" : ""} data-v-6d719bc3>${ssrInterpolate(unref(formData).message)}</textarea></div><button type="submit" class="submit-button"${ssrIncludeBooleanAttr(unref(isSubmitted)) ? " disabled" : ""} data-v-6d719bc3>${ssrInterpolate(unref(isSubmitted) ? _ctx.$t("contact.form.submitSuccess") : _ctx.$t("contact.form.submit"))}</button></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6d719bc3"]]);

export { contact as default };
//# sourceMappingURL=contact.vue.mjs.map
