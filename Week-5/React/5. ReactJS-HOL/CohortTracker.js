import React from 'react';
import styles from './CohortTracker.module.css'; // Importing the CSS module

export const CohortTracker = () => {
  // Mock data for our tracker dashboard
  const cohortData = {
    id: "CH-2026-A",
    course: "Full Stack React Development",
    totalStudents: 45,
    completedLabs: 4,
    status: "Active"
  };

  return (
    <div className={styles.dashboardCard}>
      <h2 className={styles.title}>Cohort Tracker Dashboard</h2>
      
      <div className={styles.cohortInfo}>
        <strong>Cohort ID:</strong> {cohortData.id}
      </div>
      
      <div className={styles.cohortInfo}>
        <strong>Course:</strong> {cohortData.course}
      </div>

      <div>
        <span className={styles.statusActive}>{cohortData.status}</span>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <div className={styles.statNumber}>{cohortData.totalStudents}</div>
          <div className={styles.statLabel}>Students Enrolled</div>
        </div>
        
        <div className={styles.statBox}>
          <div className={styles.statNumber}>{cohortData.completedLabs}</div>
          <div className={styles.statLabel}>Labs Completed</div>
        </div>
      </div>
    </div>
  );
};
