<template>

  <!-- repository card -->
  <a :href="url" target="_blank" class="github-card">

    <!-- title -->
    <h3>{{ name }}</h3>

    <!-- github-card__info -->
    <div>

      <!-- image -->
      <div class="github-card__image" v-if="image">
        <img :src="image" />
      </div>

      <!-- lead -->
      <p v-if="description">{{ description }}</p>

      <!-- language -->
      <span class="github-card__language" v-if="language">
        <span class="github-card__language-icon" style="color: #7A0410;">●</span> {{ language }}
      </span>
    </div>

    <div class="github-card__metas">

      <!-- stargazers count -->
      <div class="github-card__meta">
        <span class="card-meta__label">Stargazers</span> {{ stargazersCount }}
      </div>

      <!-- open issues count -->
      <div class="github-card__meta github-card__openIssuesCount">
        <span class="card-meta__label">Open issues</span> {{ openIssuesCount }}
      </div>

      <!-- created -->
      <div class="github-card__meta">
        <span class="card-meta__label">Created</span> {{ created | formatDate }}
      </div>

      <!-- pushed -->
      <span class="github-card__meta">
        <span class="card-meta__label">Pushed</span> {{ pushed | formatDate }}
      </span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'card',
  props: [
    'url',
    'name',
    'image',
    'description',
    'language',
    'stargazers-count',
    'open-issues-count',
    'created',
    'pushed'
  ]
}
</script>

<style scoped>
.github-card {
  display: block;
  box-sizing: border-box;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 20px;
  color: #555;
  text-decoration: none;
  font-size: 13px;
  flex: 1;
  min-width: 250px;
}

.github-card__image {
  float: left;
  width: 75px;
  height: 100px;
  margin-right: 15px;
}

.github-card__image img {
  width: 100%;
}

.github-card > h3 {
  margin-top: 0;
  color: #4078c0;
  font-size: 15px;
}

.github-card__metas {
  clear: left;
  margin-top: 5px;
}

.github-card__meta {
  margin-right: 20px;
}
.github-card__meta > i {
  font-size: 16px;
}

.github-card__openIssuesCount + .github-card__meta {
  margin-top: 15px;
}

.card-meta__label {
  font-weight: bold;
}

.card-meta__label:after {
  content: ':';
  font-weight: normal;
}

</style>
