import React from 'react';
import { FaClock, FaTruck } from 'react-icons/fa';

const Home = () => {
  const restaurants = [
    {
      name: 'Rose Garden Restaurant',
      categories: 'Burger - Chicken - Rice - Wings',
      rating: 4.7,
      delivery: 'Free',
      time: '20 min',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Sunny Cafe',
      categories: 'Pizza - Pasta - Salad',
      rating: 4.5,
      delivery: 'Free',
      time: '15 min',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ];


  const styles = {
    homeContainer: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto',
      backgroundColor: '#f5f5f5',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    deliveryTo: {
      select: {
        border: 'none',
        background: 'none',
        fontSize: '16px',
        color: '#6c63ff',
      },
    },
    notification: {
      backgroundColor: '#6c63ff',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '12px',
    },
    greeting: {
      fontSize: '18px',
      color: '#333',
    },
    searchBar: {
      input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '14px',
      },
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '16px',
      color: '#333',
      marginBottom: '10px',
    },
    categoryButtons: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    categoryButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '20px',
      backgroundColor: '#ddd',
      cursor: 'pointer',
    },
    activeButton: {
      backgroundColor: '#6c63ff',
      color: 'white',
    },
    restaurantCard: {
      backgroundColor: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      marginBottom: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    restaurantImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
    restaurantInfo: {
      padding: '10px',
    },
    restaurantName: {
      margin: '0',
      fontSize: '16px',
    },
    restaurantCategories: {
      margin: '5px 0',
      color: '#666',
      fontSize: '14px',
    },
    ratingDelivery: {
      display: 'flex',
      gap: '10px',
      fontSize: '14px',
      color: '#666',
    },
    ratingItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
  };

  return (
    <div style={styles.homeContainer}>
      <div style={styles.header}>
        <div style={styles.deliveryTo}>
          <span>DELIVER TO</span>
          <select style={styles.deliveryTo.select}>
            <option>DV office</option>
          </select>
        </div>
        <div style={styles.notification}>
          <span>2</span>
        </div>
        <h2 style={styles.greeting}>Hey Cece, Good Afternoon!</h2>
      </div>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input type="text" placeholder="Search dishes, restaurants" style={styles.searchBar.input} />
      </div>
      <div>
        <h3 style={styles.sectionHeader}>
          All Categories <span>See All</span>
        </h3>
        <div style={styles.categoryButtons}>
          <button style={{ ...styles.categoryButton, ...styles.activeButton }}>All</button>
          <button style={styles.categoryButton}>Hot Dog</button>
          <button style={styles.categoryButton}>Burger</button>
        </div>
      </div>


      <div>
        <h3 style={styles.sectionHeader}>
          Open Restaurants <span>See All</span>
        </h3>
        <div>
          {restaurants.map((restaurant, index) => (
            <div key={index} style={styles.restaurantCard}>
              <img src={restaurant.image} alt={restaurant.name} style={styles.restaurantImage} />
              <div style={styles.restaurantInfo}>
                <h4 style={styles.restaurantName}>{restaurant.name}</h4>
                <p style={styles.restaurantCategories}>{restaurant.categories}</p>
                <div style={styles.ratingDelivery}>
                  <span style={styles.ratingItem}>⭐ {restaurant.rating}</span>
                  <span style={styles.ratingItem}>
                    <FaTruck /> {restaurant.delivery}
                  </span>
                  <span style={styles.ratingItem}>
                    <FaClock /> {restaurant.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;