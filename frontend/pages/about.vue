<template>
  <div>
    <h2>Education</h2>
    <br />
    <div class="aboutWrapper">
      <img src="../assets/img/chief.png" alt="Illinois Chief Logo" />
      <ul>
        <li><b>University of Illinois at Urbana-Champaign</b></li>
        <br />
        <li v-if="isOnMobile">M.C.S. in Data Science</li>
        <li v-else>Master of Computer Science in Data Science</li>
        <li v-if="isOnMobile">B.Sc. in Accountancy (Honor)</li>
        <li v-else>Bachelor of Science in Accountancy (Honor)</li>
        <li v-if="isOnMobile">B.Sc. in Finance (Honor)</li>
        <li v-else>Bachelor of Science in Finance (Honor)</li>
        <li>Minor in Computer Science</li>
      </ul>
    </div>
    <br />
    <hr />
    <br />
    <h2>Employment</h2>
    <br />
    <div class="aboutWrapper">
      <ul>
        <li>2021-Current</li>
      </ul>
      <ul>
        <li><b>HYUNDAI CAPITAL SERVICES – SENIOR DATA SCIENTIST </b></li>
        <li>GTM-GA4-BigQuery Implementation</li>
        <li>Recommender System for Banner Ads on 3rd-Party Sites</li>
      </ul>
    </div>
    <div class="aboutWrapper">
      <ul>
        <li>2017-2021</li>
      </ul>
      <ul>
        <li>
          <b>EY CONSULTING – SENIOR CONSULTANT, DATA &amp; ANALYTICS</b>
        </li>
        <li>
          Samsung Electronics – Development of E2E Global Sellouts Management
          Solution
        </li>
        <li>Samsung Electronics – SARIMAX Forecasting on Flagship Sellout</li>
        <li>Samsung Electronics – GIS Analysis for Market Expansion</li>
        <li>Samsung Electronics – Survival Analysis on Active Devices</li>
        <li>Samsung Electronics – Optimization of Salesforce Staffing</li>
        <li>Samsung Electronics – Semi-Realtime Monitoring of the SCM</li>
        <li>NH Investment and Securities – Personalized Product and Service</li>
        <li>Emart – Demand Forecasting of Fresh Foods</li>
      </ul>
    </div>
    <div class="aboutWrapper">
      <ul>
        <li>2014-2017</li>
      </ul>
      <ul>
        <li><b>HANWHA CHEMICAL CO. – MANAGER, FIANCIAL ACCOUNTING</b></li>
        <li>Automation of Financial Statement Disclosure</li>
        <li>Development of Fair-value Assessment System</li>
      </ul>
    </div>
    <div class="aboutWrapper">
      <ul>
        <li>2012-2013</li>
      </ul>
      <ul>
        <li><b>GREEN LIGHT TRADING LLC – HIGH-FREQUENCY TRADER</b></li>
        <li>Data Mining of Trading Log</li>
        <li>Hyperparameter Tuning for HFT System</li>
      </ul>
    </div>
    <br />
    <hr />
    <br />
    <h2>Skills</h2>
    <br />
    <div
      v-for="skill in skills"
      :key="skill.type"
      class="skillWrapper"
    >
      <p>{{ skill.type }}</p>
      <ul>
        <li v-for="link in skill.links" :key="link.alt">
          <img
            :src="
              'https://img.shields.io/badge/-' +
              link.alt+
              '-' +
              link.color +
              '?style=for-the-badge&logo=' +
              link.name +
              '&logoColor=ffdd54&style=flat'
            "
            :alt="link.alt"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import badges from "../assets/json/badges.json";

export default defineComponent({
  layout: "MainLayout",
  data() {
    return {
      skills: badges,
    };
  },
  head: {
    title: 'About Page',
    meta: [
      {
        hid: 'about:title',
        name: 'og:title',
        content: "I'm a ML Engineer"
      }
    ],
  }
});
</script> 

<style scoped lang="scss">
h2 {
  height: 32px;
}

@media (max-width: 767px) {
  .aboutWrapper, .skillWrapper {
    display: block;
  }
}

@media (min-width: 767px) {
  .aboutWrapper, .skillWrapper {
    display: flex;
  }
}

.aboutWrapper > ul {
  margin-bottom: 20px;
}

.aboutWrapper > img,
ul:first-child,
p {
  width: 140px;
  margin-right: 30px;
  font-weight: bold;
  flex-shrink: 0;
}

.skillWrapper > ul {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 5px;
  flex-shrink: 1;
}

.skillWrapper > ul > li {
  margin-right: 3px;
}
</style>
