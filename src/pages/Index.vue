<template>
  <Layout>

    <!-- <g&#45;link  -->
    <!--   :to="item.node.path" -->
    <!--   v&#45;for="item in $page.posts.edges"  -->
    <!--   :key="item.node.id" -->
    <!--   class="blog&#45;post" -->
    <!-- > -->
    <div class="item" v-for="item in $page.posts.edges"
        :key="item.node.id">

      <div class="container blog">
        <g-link :to="item.node.path">
         <h2 class="blog-title">{{ item.node.title }}</h2>
        </g-link>
        <p class="blog-date">{{ item.node.date}}</p>
        <p class="blog-excerpt">{{ item.node.Description}}</p>
      </div>
      </div>
      <div class="item pagination">
        <Pager :info="$page.posts.pageInfo" />
      </div>
  </Layout>
</template>

<page-query>
query Blog($page: Int){
	posts: allBlogPost(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        Description
        date (format: "D MMMM YYYY")
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.pagination {
    text-align:center;
}
.pagination a {
    margin-right: var(--margin);
}
</style>
