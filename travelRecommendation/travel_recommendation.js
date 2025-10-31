const btnSearch = document.getElementById('btnSearch');

  function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const condition = data.countries.find(item => item.name.toLowerCase() === input);

        if (condition) {
          const cities = condition.cities.join(', ');
          const temples = condition.temples.join(', ');
		  const beaches = condition.beaches.join(', ');
          

          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imageUrl}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Cities:</strong> ${cities}</p>`;
          resultDiv.innerHTML += `<p><strong>Temples:</strong> ${temples}</p>`;
          resultDiv.innerHTML += `<p><strong>Beaches:</strong> ${beaches}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCondition);
