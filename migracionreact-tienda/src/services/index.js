export const fetchApi = async () => {
    try {
      const response = await fetch(
        "https://josearriola2021.github.io/dataJson/data.json"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };