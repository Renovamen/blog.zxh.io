<template>
  <Common>
    <template #page>
      <div class="about-wrapper">
        <div class="profile">
          <div class="profile__content">
            <div class="profile__basic">
              <img class="avatar" :src="$withBase(pageData.frontmatter.avatar)" />

              <h2 class="title">{{ pageData.frontmatter.name }}</h2>
              <p class="subname">{{ pageData.frontmatter.subname }}</p>

              <div class="sns">
                <div
                  v-for="(link, platform) in LINKS"
                  :key="`about-${link}`"
                  class="sns__item"
                >
                  <a target="_blank" :href="link">
                    <v-icon :name="snsIcon(platform)" scale="1.82" />
                  </a>
                </div>

                <div v-if="pageData.frontmatter.cv" class="sns__item">
                  <a :href="pageData.frontmatter.cv">
                    <v-icon name="ai-cv" scale="2" />
                  </a>
                </div>
              </div>
            </div>

            <div class="profile__info">
              <h2 class="title">Biography</h2>

              <div class="bio-info" v-html="bioMarkdown" />

              <div class="personal-info">
                <div class="interests">
                  <p class="subtitle">Interests</p>
                  <ul>
                    <li
                      v-for="(item, index) in pageData.frontmatter.interests"
                      :key="`interests-${index}`"
                    >
                      <p v-html="item" class="item"></p>
                    </li>
                  </ul>
                </div>

                <div class="education">
                  <p class="subtitle">Education</p>
                  <ul>
                    <li
                      v-for="(item, index) in pageData.frontmatter.education"
                      :key="`education-${index}`"
                    >
                      <p class="degree">{{ item.degree }}, {{ item.year }}</p>
                      <p class="school">{{ item.school }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="theme-gungnir-content">
          <Content />
        </div>
      </div>
    </template>
  </Common>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { pageData } from "@vuepress/client";
import Common from "vuepress-theme-gungnir/lib/client/components/Common.vue";
import MarkdownIt from "markdown-it";

const LINKS = {
  github: "https://github.com/Renovamen",
  linkedin: "https://www.linkedin.com/in/xiaohan-zou",
  googleScholar: "https://scholar.google.com/citations?user=RuW6xgMAAAAJ",
  // facebook: "https://www.facebook.com/renovamen.zou",
  twitter: "https://www.twitter.com/renovamen_zxh",
  zhihu: "https://www.zhihu.com/people/chao-neng-gui-su",
  email: "mailto:renovamenzxh@gmail.com"
};

const ICONS = {
  github: "ri-github-fill",
  linkedin: "ri-linkedin-box-fill",
  googleScholar: "ai-google-scholar-square",
  // facebook: "ri-facebook-box-fill",
  twitter: "ri-twitter-fill",
  zhihu: "ri-zhihu-line",
  email: "hi-mail"
};

const BIO_PATH = "/md/about.md";

const getMarkdownIt = () => {
  const md = new MarkdownIt();

  // Remember old renderer, if overridden, or proxy to default renderer
  const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    // If you are sure other plugins can't add `target` - drop check below
    const aIndex = tokens[idx].attrIndex("target");
    if (aIndex < 0) {
      tokens[idx].attrPush(["target", "_blank"]); // add new attribute
    } else {
      tokens[idx].attrs[aIndex][1] = "_blank";    // replace value of existing attr
    }
    // pass token to default renderer.
    return defaultRender(tokens, idx, options, env, self);
  };

  return md;
}

const bioMarkdown = ref("");

onMounted(() => {
  const md = getMarkdownIt();

  fetch(BIO_PATH)
    .then((response) => response.text())
    .then((result) => bioMarkdown.value = md.render(result))
    .catch((error) => console.error(error));
});

const snsIcon = (platform) => ICONS[platform];
</script>
