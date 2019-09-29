<template>
  <div class="navbar-spacing padding-top-30">
    <input type="number" v-model="age" />

    <p>Gender</p>
    <input type="radio" name="gender" v-model="gender" value="1" /> Male
    <br />
    <input type="radio" name="gender" v-model="gender" value="2" />
    Female
    <p>Height</p>
    <input type="radio" name="height" v-model="height" value="1" /> feet/inch
    <br />
    <input type="radio" name="height" v-model="height" value="2" />cm
    <br />

    <input type="number" v-model="height_value" />
    <input v-if="height == 1" type="number" v-model="height_value_inch" />

    <p>Weight</p>
    <input type="radio" name="weight" v-model="weight" value="1" />lbs
    <br />
    <input type="radio" name="weight" v-model="weight" value="2" />kg
    <br />

    <input type="number" v-model="weight_value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
      gender: 1,
      height: 1,
      weight: 1,
      bmr: 0,
      height_value: 0,
      weight_value: 0,
      height_value_inch : 0
    }
  },
  mounted() {},

  watch: {
    age: function(val) {
      this.age = parseInt(val)
      this.calculate()
    },
    gender: function(val) {
      this.gender = parseInt(val)
      this.calculate()
    },

    height: function(val) {
      this.height = parseInt(val)
      this.calculate()
    },

    weight: function(val) {
      this.weight = parseInt(val)

      this.calculate()
    },

    height_value: function(val) {
      this.height_value = parseFloat(val)
      this.calculate()
    },

    height_value_inch: function(val) {
      this.height_value_inch = parseFloat(val)
      this.calculate()
    },

    weight_value: function(val) {
      this.weight_value = parseFloat(val)
      this.calculate()
    }
  },
  methods: {
    calculate: function() {
      switch (this.gender) {
        case 1: //male
          console.log('changed')

          var weight = this.weight_value, height = this.height_value
        
            if(this.height == 1){
                height = this.height_value * 30.48
                // console.log("this.height_value_inch * 2.54")
                // console.log(this.height_value_inch * 2.54)
                // console.log(this.height_value * 30.48)
                // console.log(this.height_value * 30.48 + this.height_value_inch * 2.54)
            }
        
            if(this.weight == 1){
                weight = this.weight_value * 0.453592
            }

            console.log(weight)
            console.log(height)

          this.bmr =
            (10 * weight) + (6.25 * height) - (5 * this.age) + 5
          break
        case 2:
          console.log('changed')

          var weight = this.weight_value, height = this.height_value
        
            if(this.height == 1){
                height = this.height_value * 30.48
                // console.log("this.height_value_inch * 2.54")
                // console.log(this.height_value_inch * 2.54)
                // console.log(this.height_value * 30.48)
                // console.log(this.height_value * 30.48 + this.height_value_inch * 2.54)
            }
        
            if(this.weight == 1){
                weight = this.weight_value * 0.453592
            }

            console.log(weight)
            console.log(height)

          this.bmr =
            (10 * weight) + (6.25 * height) - (5 * this.age) - 161
          break
          break
      }

      console.log(this.bmr)
    }
  }
}
</script>