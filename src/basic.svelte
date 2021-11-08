<script>
    let fname = "Anis";
    let lname = "Khan";
    let color = "green";
    let showGreen = true;
    $: name = fname + " " + lname;
  
    const toggleColor = function () {
      if (color == "green") {
        color = "red";
        showGreen = false;
      } else {
        color = "green";
        showGreen = true;
      }
    };
  
    const users = [{
      id: 1, 
      name: 'Anis'
    },{
      id: 2, 
      name: 'Khan'
    },{
      id: 3, 
      name: 'Jawad'
    },{
      id: 4, 
      name: 'Abbas'
    }]
  </script>
  
  <main>
    <h1 style="color: {color}">Hello {name}!</h1>
    <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
    </p>
  
    {#if showGreen}
      <p>The Text is green now</p>
    {:else}
      <p>The Text is red now</p>
    {/if}
  
    {#each users as user (user.id)}
      <p> {user.id} : {user.name}</p> 
    {/each}
  
    <button on:click={toggleColor}>Update color </button>
  
  </main>
  
  <style>
    main {
      text-align: center;
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
  
    h1 {
      color: #ff3e00;
      text-transform: uppercase;
      font-size: 4em;
      font-weight: 100;
    }
  
    @media (min-width: 640px) {
      main {
        max-width: none;
      }
    }
  </style>
  