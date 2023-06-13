<template>
  <div>
    <h1 class="heading">Lunchmeny</h1>
      <p v-for="d in menuDays" :key="d.day">
        <b style="color: #42b983; font-family: 'Cormorant', serif;">{{d.day}}</b> <br/>
        <i>{{d.meal}}</i>
      </p>
      <hr class="green-line"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menuDays: [
        {
          day: "Mån", 
          meal: "Vegetariska köttbullar med potatis och lingonsylt",
        },
        {
          day: "Tis", 
          meal: "Spenatsoppa med ägg",
        },
        {
          day: "Ons", 
          meal: "ZucchiniPasta",
        },
        {
          day: "Tor", 
          meal: "Vegetarisk Hamburgare",
        },
        {
          day: "Fre", 
          meal: "Vegetarisk tacos",
        },

      ]
    }
  }
}
</script>
<style scoped>
.heading {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 40px;
}
.green-line {
 border: 2px solid #42b983;
 width: 300px;
}
</style>

