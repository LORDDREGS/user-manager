const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // Для логирования HTTP запросов
const userRoutes = require('./routes/userRoutes');
const plantRoutes = require('./routes/plantRoutes');
const positionRoutes = require('./routes/positionRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/auth');

const app = express();
app.use(express.json());
app.use(morgan('dev')); // Логирование в режиме разработки

mongoose.connect('mongodb://localhost:27017/userManagementDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Выход из процесса Node.js в случае ошибки подключения
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/plants', plantRoutes);
app.use('/api/positions', positionRoutes);
app.use('/api/departments', departmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
