import { _ as __nuxt_component_0 } from './client-only.mjs';
import { useSSRContext, ref, resolveDirective, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    useHead({
      title: t("nav.about") + " | Gudupao"
    });
    const animationExecuted = ref(false);
    const checkAndRunAnimation = () => {
      if (!animationExecuted.value) {
        animationExecuted.value = true;
        return true;
      }
      return false;
    };
    const teamMembers = ref([
      { avatar: "/img/team/member1.jpg", id: 0 },
      { avatar: "/img/team/member2.jpg", id: 1 },
      { avatar: "/img/team/member3.jpg", id: 2 }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-container" }, _attrs))} data-v-f49302c4><div class="hero-section" data-v-f49302c4>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="sticky-container" data-v-f49302c4><div${ssrRenderAttrs(mergeProps({
        class: "hero-content",
        initial: { scale: 1.2, opacity: 0, y: 50 },
        enter: { scale: 1, opacity: 1, y: -50 },
        visible: checkAndRunAnimation()
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-f49302c4><h1 class="hero-title" data-v-f49302c4>${ssrInterpolate(_ctx.$t("about.title"))}</h1><p class="hero-description" data-v-f49302c4>${ssrInterpolate(_ctx.$t("about.description"))}</p></div></div></div><div class="section-wrapper" data-v-f49302c4><div class="team-intro-section" data-v-f49302c4><h2${ssrRenderAttrs(mergeProps({
        class: "section-title",
        initial: { opacity: 0, y: 50 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { duration: 800 }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-f49302c4>${ssrInterpolate(_ctx.$t("about.teamIntroTitle"))}</h2><p${ssrRenderAttrs(mergeProps({
        class: "team-intro-description",
        initial: { opacity: 0, y: 30 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 200,
            duration: 800
          }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-f49302c4>${ssrInterpolate(_ctx.$t("about.teamIntroDescription"))}</p></div></div><div class="section-wrapper" data-v-f49302c4><div class="team-section" data-v-f49302c4><h2${ssrRenderAttrs(mergeProps({
        class: "section-title",
        initial: { opacity: 0, y: 50 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { duration: 800 }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-f49302c4>${ssrInterpolate(_ctx.$t("about.teamTitle"))}</h2><div class="team-grid" data-v-f49302c4><!--[-->`);
      ssrRenderList(teamMembers.value, (member, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: "team-card",
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 200,
              duration: 800
            }
          }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-f49302c4><div class="member-image-container" data-v-f49302c4><img${ssrRenderAttr("src", member.avatar)}${ssrRenderAttr("alt", _ctx.$t(`about.team.${index}.name`))} class="member-image" data-v-f49302c4></div><div class="member-info" data-v-f49302c4><h3 data-v-f49302c4>${ssrInterpolate(_ctx.$t(`about.team.${index}.name`))}</h3><p class="position" data-v-f49302c4>${ssrInterpolate(_ctx.$t(`about.team.${index}.position`))}</p><p class="description" data-v-f49302c4>${ssrInterpolate(_ctx.$t(`about.team.${index}.description`))}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="vision-wrapper" data-v-f49302c4><div class="vision-section" data-v-f49302c4><h2${ssrRenderAttrs(mergeProps({
        class: "section-title",
        initial: { opacity: 0, y: 50 },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: { duration: 800 }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-f49302c4>${ssrInterpolate(_ctx.$t("about.visionTitle"))}</h2><div class="vision-grid" data-v-f49302c4><!--[-->`);
      ssrRenderList(3, (vision, index) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: index,
          class: "vision-card",
          initial: { opacity: 0, y: 50 },
          visibleOnce: {
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 200,
              duration: 800
            }
          }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-f49302c4><div class="vision-content" data-v-f49302c4><div class="vision-icon" data-v-f49302c4></div><h3 data-v-f49302c4>${ssrInterpolate(_ctx.$t(`about.vision.${index}.title`))}</h3><p data-v-f49302c4>${ssrInterpolate(_ctx.$t(`about.vision.${index}.description`))}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f49302c4"]]);

export { about as default };
//# sourceMappingURL=about.vue.mjs.map
