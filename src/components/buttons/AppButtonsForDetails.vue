<template>
  <div class="container">
    <div class="card-pokemon">
      <div class="logo-pokeball">
        <img src="./img/Pokeball.png" alt="">
      </div>
      <div class="header-details">
        <span class="arrow-back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.23045 17.5117L10.0039 16.7383C10.1869 16.5553 10.1869 16.2585 10.0039 16.0754L3.94408 10.0157H17.2812C17.5401 10.0157 17.75 9.80578 17.75 9.54691V8.45316C17.75 8.1943 17.5401 7.98441 17.2812 7.98441H3.94408L10.0039 1.92465C10.1869 1.7416 10.1869 1.4448 10.0039 1.26172L9.23045 0.488359C9.04741 0.305312 8.75061 0.305312 8.56752 0.488359L0.387285 8.66859C0.204238 8.85164 0.204238 9.14844 0.387285 9.33152L8.56752 17.5118C8.75057 17.6948 9.04737 17.6948 9.23045 17.5117Z"
            fill="white"/>
          </svg>
        </span>
        <span class="name-pokemon">Bulbasaur</span>
        <span class="id-pokemon">#001</span>
      </div>
      <div class="img-pokemon">
        <img src="./img/bulbasaur.png" alt="">
        <img class="arrow-right" src="./img/move-right.png" alt="">
      </div>
      <div class="details-pokemon">
        <div class="types-buttons">
          <button class="btn grass">Grass</button>
          <button class="btn poison">Poison</button>
        </div>
        <h2 class="about">About</h2>
        <div class="description-pokemon">
          <div class="specification">
            <div class="attribute-value">
              <img src="./img/weight.png" alt="">
              <span>6,9 kg</span>
            </div>
            <div class="attribute-title">Weight</div>
          </div>
          <div class="specification">
            <div class="attribute-value">
              <img src="./img/height.png" alt="">
              <span>0,7 m</span>
            </div>
            <div class="attribute-title">Height</div>
          </div>
          <div class="specification">
            <div class="attribute-value">
              <span>Chlorophyll<br>Overgrow</span>
            </div>
            <div class="attribute-title">Moves</div>
          </div>
        </div>
        <div class="text-pokemon">
          There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.
        </div>
        <div class="base-stats">
          <h2 class="about">Base Stats</h2>
          <div class="block-stats">
            <div class="name-stats">
              <span>hp</span>
              <span>atk</span>
              <span>def</span>
              <span>satk</span>
              <span>sdef</span>
              <span>spd</span>
            </div>
            <div class="value-stats">
              <div class="progress-stats">
                <span>045</span> <progress value="45" max="100"></progress>
              </div>
              <div class="progress-stats">
                <span>049</span> <progress value="49" max="100"></progress>
              </div>
              <div class="progress-stats">
                <span>049</span> <progress value="49" max="100"></progress>
              </div>
              <div class="progress-stats">
                <span>065</span> <progress value="65" max="100"></progress>
              </div>
              <div class="progress-stats">
                <span>065</span> <progress value="65" max="100"></progress>
              </div>
              <div class="progress-stats">
                <span>045</span> <progress value="45" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AppButtonsForDetails'
  // data () {
  //   return {
  //     pokemonType: [
  //       { type: 'Normal', background: 'var(--color-pokemon-normal)' },
  //       { type: 'Fighting', background: 'var(--color-pokemon-fighting)' },
  //       { type: 'Flying', background: 'var(--color-pokemon-flying)' },
  //       { type: 'Ground', background: 'var(--color-pokemon-ground)' },
  //       { type: 'Poison', background: 'var(--color-pokemon-poison)' },
  //       { type: 'Rock', background: 'var(--color-pokemon-rock)' },
  //       { type: 'Bug', background: 'var(--color-pokemon-bug)' },
  //       { type: 'Ghost', background: 'var(--color-pokemon-ghost)' },
  //       { type: 'Steel', background: 'var(--color-pokemon-steel)' },
  //       { type: 'Fire', background: 'var(--color-pokemon-fire)' },
  //       { type: 'Water', background: 'var(--color-pokemon-water)' },
  //       { type: 'Grass', background: 'var(--color-pokemon-grass)' },
  //       { type: 'Electric', background: 'var(--color-pokemon-electric)' },
  //       { type: 'Psychic', background: 'var(--color-pokemon-psychic)' },
  //       { type: 'Ice', background: 'var(--color-pokemon-ice)' },
  //       { type: 'Dragon', background: 'var(--color-pokemon-dragon)' },
  //       { type: 'Dark', background: 'var(--color-pokemon-dark)' },
  //       { type: 'Fairy', background: 'var(--color-pokemon-fairy)' }
  //     ]
  //   }
  // },
  // methods: {
  //
  // }
}
</script>

<style scoped>
.container {
  max-width: 1000px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
}
.btn {
  padding: 2px 8px;
  border-radius: 10px;
  cursor: pointer;
  border-color: transparent;
  font-size: 10px;
  color: #fff;
}

.btn:last-child {
  margin-left: 16px;

}

.types-buttons {
  display: flex;
  justify-content: center;
}

.btn.grass {
  background: var(--color-pokemon-grass);
}

.btn.poison {
  background: var(--color-pokemon-poison);
}

.card-pokemon {
  position: relative;
  background: var(--color-pokemon-grass);
  width: 360px;
  /*height: 640px;*/
  border-radius: 12px;
}

.logo-pokeball {
  position: absolute;
  right: 8px;
  top: 8px;
}

.header-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0 24px;
}

.arrow-back {
  display: flex;
  align-items: center;
  margin-right: 19px;
  cursor: pointer;
}

.name-pokemon {
  font-size: 24px;
  font-weight: bold;
  margin-right: 16px;
  color: #fff;
}

.id-pokemon {
  font-size: 12px;
  font-weight: bold;
  color: #fff;
}

.img-pokemon {
  position: relative;
  max-width: 200px;
  max-height: 200px;
  margin: 30px 80px 0 80px;
  z-index: 1;
}

.img-pokemon .arrow-right {
  position: absolute;
  right: -50px;
  bottom: 70px;
  cursor: pointer;
}

.details-pokemon {
  border-radius: 8px;
  margin: -56px 4px 4px 4px;
  background: #fff;
  padding: 56px 0 44px 0;
}

.about {
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  color: var(--color-pokemon-grass);
}

.description-pokemon {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.specification {
  height: 48px;
  width: 33%;
  border-right: 1px solid #E0E0E0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.specification:last-child {
  border-right: none;
}

.specification .attribute-value {
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.specification .attribute-value span {}

.specification .attribute-title {
  font-size: 8px;
}

.specification .attribute-value img {
  margin-right: 8px;
}

.text-pokemon {
  margin-top: 16px;
  font-size: 10px;
  padding: 0 20px;
}

.base-stats {}

.block-stats {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
}

.name-stats {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #E0E0E0;
  padding-right: 12px;
  margin-right: 12px;
}

.name-stats span {
  font-size: 10px;
  line-height: 16px;
  font-weight: bold;
  text-transform: uppercase;
}

.value-stats {
  display: flex;
  flex-direction: column;
  margin-right: 8px;
}

.value-stats span {
  font-size: 10px;
  line-height: 16px;
  color: #212121;
}

.progress-stats {
  display: flex;
  align-items: center;
}

.progress-stats span {
  margin-right: 8px;
}

.progress-stats progress {
  min-width: 230px;
  height: 4px;
  border-radius: 6px;
}

.progress-stats progress::-webkit-progress-bar {
  background-color: rgba(116, 203, 72, .2);
  border-radius: 6px;
}
.progress-stats progress::-webkit-progress-value {
  background-color: var(--color-pokemon-grass);
  border-radius: 6px;
}

</style>
