<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">

        <BlogContent :content="$page.post.content" />
    
        <div class="item">
          <div class="">
            <div class="">
              <span class="label">Date: </span>
              <span>{{ $page.post.date | formatPrettyDate }} </span>
            </div>
          </div>          
        </div>

      </div>
    </div>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "D MMMM YYYY")
    timeToRead
    content
  }
}
</page-query>

<script>
import BlogContent from "@/components/BlogContent"

export default {
  components: {
    BlogContent
  },
  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>
