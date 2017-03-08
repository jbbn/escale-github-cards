<template>
    <div class="board">

        <!-- board title -->
        <h1 @click="filterData('language', 'JavaScript')">
          {{ user }}
        </h1>

        <!-- filter cards -->
        <div>
          <select v-model="language" @change="filterData('language', language)">
            <option v-for="language in languages">{{ language }}</option>
          </select>
        </div>

        <!-- cards wrapper -->
        <div class="github-cards">

          <!-- cards loop -->
          <div is="card" v-for="repo in repos"
            :url="repo.html_url"
            :name="repo.name"
            :image="repo.owner.avatar_url"
            :description="repo.description"
            :language="repo.language"
            :stargazers-count="repo.stargazers_count"
            :open-issues-count="repo.open_issues_count"
            :created="repo.created_at"
            :pushed="repo.pushed_at"
            />
        </div>
    </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'board',
  data () {
    return {
      user: 'wilfernandesjr',
      repos: [],
      _repos: [],
      language: 'Show all languages',
      languages: []
    }
  },
  mounted () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.$http.get('https://api.github.com/users/' + this.user + '/starred')
        .then(response => {
          this.repos = response.body
          this._repos = this.repos

          // get all languages of fetched repositories
          let languages = this._repos.map(function (repo) {
            return repo.language ? repo.language : 'Without language'
          })
          languages = languages.filter(function (item, pos) {
            return item && languages.indexOf(item) === pos
          })
          this.languages = ['Show all languages'].concat(languages)
        })
    },
    filterData (key, value) {
      if (value === 'Show all languages') {
        // reset filter
        this.repos = this._repos
      } else if (key === 'language' && value === 'Without language') {
        // repos without language
        this.repos = this._repos.filter(function (repo) {
          return !repo.language
        })
      } else {
        // filter by key
        this.repos = this._repos.filter(function (repo) {
          return repo[key] === value
        })
      }
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
.github-cards {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;
}
</style>
