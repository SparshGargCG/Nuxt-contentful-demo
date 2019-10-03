// Navigation.vue
<template>
    <div class="navigation">
      <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
    <div 
      <nav>
        <ul id="menu">
          <li class="tooltip" v-for="(navItem, index) in books" :key="index">
            <nuxt-link :to="'/' + navItem.fields.writer.trim()" role="menuitem">{{navItem.fields.title}}</nuxt-link>
            <span class="tooltiptext">{{navItem.fields.content}}</span>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        props: {
          books: {
            type: Array, // We expect an array of books that we need for our navigation
            required: true
          }
        }
    }
</script>
<style scoped>
/* body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
} */
.text-space {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  }
ul#menu li {
  display:inline;
  padding:inherit;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4CAF50;
  color: white;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>