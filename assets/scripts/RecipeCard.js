// RecipeCard.js

class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement
		this.attachShadow({ mode: 'open' });

		// EXPOSE - START (All expose numbers start with A)
		// A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
		// A2. TODO - Create an <article> element - This will hold our markup once our data is set
		// A3. TODO - Create a style element - This will hold all of the styles for the Web Component
		// A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything INSIDE the <style> tag>)
		// A5. TODO - Append the <style> and <article> elements to the Shadow DOM
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;
		this.shadowRoot.innerHTML = '';
		let style = document.createElement('style');
    	style.textContent = `
			article {
        		align-items: center;
        		border: 1px solid rgb(223, 225, 229);
        		border-radius: 8px;
        		display: grid;
        		grid-template-rows: 118px 56px 14px 18px 15px 36px;
        		height: auto;
        		row-gap: 5px;
        		padding: 0 16px 16px 16px;
        		width: 178px;
      		}

      		div.rating {
        		align-items: center;
        		column-gap: 5px;
        		display: flex;
      		}

      		div.rating > img {
        		height: auto;
        		display: inline-block;
        		object-fit: scale-down;
        		width: 78px;
      		}

      		article > img {
        		border-top-left-radius: 8px;
        		border-top-right-radius: 8px;
        		height: 118px;
        		object-fit: cover;
        		margin-left: -16px;
        		width: calc(100% + 32px);
      		}

      		p.ingredients {
        		height: 32px;
        		line-height: 16px;
        		padding-top: 4px;
      	  		overflow: hidden;
      		}

      		p.organization {
        		color: black !important;
      		}

      		a {
        		text-decoration: none;
      		}

      		a > p.title {
        		font-size: 16px;
        		margin: 0;
        		color: rgb(0, 0, 238);
      		}

      		p:not(.title), span, time {
        		font-size: 12px;
        		margin: 0;
        		color: #70757a;
      		}
    	`;

    	const card = document.createElement('article');

    	const img = document.createElement('img');
    	img.src = data.imgSrc;
    	img.alt = data.imgAlt;
    	card.appendChild(img);

    	const title = document.createElement('p');
    	title.className = 'title';
    	const titleLink = document.createElement('a');
    	titleLink.href = data.titleLnk;
    	titleLink.textContent = data.titleTxt;
    	title.appendChild(titleLink);
    	card.appendChild(title);

    	const organization = document.createElement('p');
    	organization.className = 'organization';
    	organization.textContent = data.organization;
    	card.appendChild(organization);

    	const ratingDiv = document.createElement('div');
    	ratingDiv.className = 'rating';
    	const rating = Math.round(data.rating);
    	const ratingImg = document.createElement('img');
    	ratingImg.src = `assets/images/icons/${rating}-star.svg`;
    	ratingImg.alt = `${rating} stars`;
    	const ratingSpan = document.createElement('span');
    	ratingSpan.textContent = `(${data.numRatings})`;
    	ratingDiv.appendChild(document.createTextNode(rating));
    	ratingDiv.appendChild(ratingImg);
    	ratingDiv.appendChild(ratingSpan);
    	card.appendChild(ratingDiv);

    	const time = document.createElement('time');
    	time.textContent = data.lengthTime;
    	card.appendChild(time);

    	const ingredients = document.createElement('p');
    	ingredients.className = 'ingredients';
    	ingredients.textContent = data.ingredients;
    	card.appendChild(ingredients);

    	this.shadowRoot.append(style, card);

		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use template
		//           literals (template strings) and element.innerHTML for this.
		// 			 Do NOT include the <article> tags within the innerHTML of the element you create.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
  		
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);
