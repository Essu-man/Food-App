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
      fontFamily: "'Poppins', Arial, sans-serif",
      padding: '20px',
      maxWidth: '400px',
      margin: '0 auto',
      backgroundColor: '#f8f9fd',
      minHeight: '100vh',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    deliveryTo: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '14px',
      color: '#555',
      select: {
        border: 'none',
        background: 'none',
        fontSize: '14px',
        color: '#6c63ff',
        fontWeight: '600',
        cursor: 'pointer',
        outline: 'none',
      },
    },
    notification: {
      backgroundColor: '#ff6f61',
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '12px',
      fontWeight: 'bold',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    greeting: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '20px',
    },
    searchBar: {
      marginBottom: '20px',
      input: {
        width: '100%',
        padding: '12px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        fontSize: '14px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        ':focus': {
          borderColor: '#6c63ff',
          boxShadow: '0 0 0 3px rgba(108, 99, 255, 0.1)',
        },
        '::placeholder': {
          color: '#aaa',
        },
      },
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '16px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '15px',
      span: {
        fontSize: '14px',
        color: '#6c63ff',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
      },
    },
    categoryButtons: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      overflowX: 'auto',
      paddingBottom: '5px',
    },
    categoryButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '20px',
      backgroundColor: '#e0e0e0',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      color: '#555',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      ':hover': {
        backgroundColor: '#d0d0d0',
        transform: 'scale(1.05)',
      },
    },
    activeButton: {
      background: 'linear-gradient(135deg, #6c63ff, #4839ff)',
      color: 'white',
      ':hover': {
        background: 'linear-gradient(135deg, #5a52ff, #3a2bff)',
        transform: 'scale(1.05)',
      },
    },
    restaurantCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      marginBottom: '15px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 15px rgba(0,0,0,0.12)',
      },
    },
    restaurantImage: {
      width: '100%',
      height: '160px',
      objectFit: 'cover',
      borderBottom: '1px solid #f0f0f0',
    },
    restaurantInfo: {
      padding: '15px',
    },
    restaurantName: {
      margin: '0',
      fontSize: '16px',
      fontWeight: '600',
      color: '#333',
    },
    restaurantCategories: {
      margin: '5px 0',
      color: '#777',
      fontSize: '13px',
      fontWeight: '400',
    },
    ratingDelivery: {
      display: 'flex',
      gap: '12px',
      fontSize: '13px',
      color: '#666',
      marginTop: '5px',
    },
    ratingItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.homeContainer}>
      {/* Header Section */}
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
      </div>

      {/* Greeting Moved Here */}
      <h2 style={styles.greeting}>Hey Cece, Good Afternoon!</h2>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input type="text" placeholder="Search dishes, restaurants" style={styles.searchBar.input} />
      </div>

      {/* Categories Section */}
      <div>
        <h3 style={styles.sectionHeader}>
          All Categories <span style={styles.sectionHeader.span}>See All</span>
        </h3>
        <div style={styles.categoryButtons}>
          <button style={{ ...styles.categoryButton, ...styles.activeButton }}>All</button>
          <button style={styles.categoryButton}>Hot Dog</button>
          <button style={styles.categoryButton}>Burger</button>
        </div>
      </div>

      {/* Open Restaurants Section */}
      <div>
        <h3 style={styles.sectionHeader}>
          Open Restaurants <span style={styles.sectionHeader.span}>See All</span>
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