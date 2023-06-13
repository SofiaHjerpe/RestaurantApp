<template>
  <div>
    <h1 class="heading">Kontakt</h1>
    <ul>
        <li><b>Email:</b> <i>{{email}}</i></li>
        <li><b>Telefonnummer:</b> <i>{{number}}</i></li>
        <li><b>Address:</b> <i>{{address}}</i></li>
    </ul>

  </div>
</template>

<script>
export default {
    data() {
        return {
            email: "loremipsum@gmail.com", 
            number: 122747692424,
            address: "Loremipsumdolor 33, 28139 Stockholm"
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
ul {
    display:flex;
    flex-direction: column; 
    gap: 20px;
    list-style:none; 
}
b {
  color: #42b983;
  font-family: 'Cormorant', serif;
}
</style>