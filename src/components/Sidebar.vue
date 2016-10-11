<template lang="html">
	<aside class="menu">
	  <p class="menu-label">
	    General
	  </p>
	  <ul class="menu-list">
	    <li><router-link :to="{name: 'home'}">Dashboard</router-link></li>
	    <!-- <li><a href="#">Customers</a></li> -->
	  </ul>

	  <ul class="menu-list">
	    <li @click="makeActive('manage')">
	      <a href="#"
					 :class="active == 'manage' ? 'is-active': '' "

				>
					<span class="icon is-small">
						<i class="fa fa-home"></i>
					</span>
	      	Students
	      	<!-- <span class="icon is-small">
				<i class="fa fa-home"></i>
			</span> -->
	      </a>
	      <ul :class="active == 'manage' ? 'show': '' ">

	        <li>
						<transition>
							<router-link to="/studentList">
								Student List
							</router-link>
						</transition>
					</li>
	        <li><a href="#">Plugins</a></li>
	        <li><a href="#">Add a member</a></li>
	      </ul>
	    </li>
	    <li @click="makeActive('invitation')">
				<a href="#"
					 :class="active == 'invitation' ? 'is-active': '' "
					 >Invitations</a>
					 <ul :class="active == 'invitation' ? 'show': '' ">

	 					<li><a href="#">Members</a></li>
	 					<li><a href="#">Plugins</a></li>
	 					<li><a href="#">Add a member</a></li>
	 				</ul>
			</li>
	    <li><a href="#">Authentication</a></li>
	  </ul>
	  <p class="menu-label">
	    Transactions
	  </p>
	  <ul class="menu-list">
	    <li>
				<a href="#">Payments</a>
				<ul>
					<li><a href="#">Members</a></li>
				  <li><a href="#">Plugins</a></li>
				  <li><a href="#">Add a member</a></li>
			 </ul>
			</li>
	    <li><a href="#">Transfers</a></li>
	    <li><a href="#">Balance</a></li>
	  </ul>
	</aside>
</template>

<script>
export default {
  data () {
    return {
			active: 'manage'
		}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
		makeActive: function(item) {
			this.active = item
		}
	},
  components: {}
}
</script>

<style lang="css">

	.menu-list li ul {
		margin: 0;
	}

	li  ul {
		/*opacity: 0;*/
		/*display: none;*/
		max-height: 0;
		margin-top: 0;
		margin-bottom: 0;
		overflow: hidden;
		transition: max-height 0.1s ease-out;
	}

	li > a.is-active ~ ul.show {
		max-height: 500px;
		/*opacity: 1;*/
		/*display: block;*/
		transition: max-height 0.5s ease-out;
	}

	.menu-list li:target ul {

	}


</style>
