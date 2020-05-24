
const tempManager = new TempManager();
const renderer = new Renderer()


const loadPage = async function() {
    await tempManager.getDataFromDB();
    renderer.renderData(tempManager.cityData);
  };
  
  loadPage();

  const handleSearch = async function(cityName) {
    await tempManager.getCityData(cityName);
    renderer.renderData(tempManager.cityData); 
  };

  $(`body`).on(`click`, `#searchCity`, function() {
    let input = $(`#cityInput`).val();
    handleSearch(input);
  });

