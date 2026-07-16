import { API_BASE_URL } from "../../settings";

const withDataFetching = (title, WrappedComponent, endpoint) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        isLoading: true,
        error: "",
      };
    }

    async componentDidMount() {
      try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        this.setState({
          data,
          isLoading: false,
        });
      } catch (error) {
        console.error(`Error fetching data on ${endpoint}:`, error);

        this.setState({
          error: error.message,
          isLoading: false,
        });
      }
    }

    render() {
      const { data, isLoading, error } = this.state;

      if (isLoading) {
        return (
          <div>
            <h2>{title}</h2>
            <p>Loading...</p>
          </div>
        );
      }

      if (error) {
        return (
          <div>
            <h2>{title}</h2>
            <p>Error: {error}</p>
          </div>
        );
      }

      if (data.length === 0) {
        return (
          <div>
            <h2>{title}</h2>
            <p>No data available.</p>
          </div>
        );
      }

      return (
        <div>
          <h2>{title}</h2>
          <WrappedComponent data={data} />
        </div>
      );
    }
  };
};

export default withDataFetching;
