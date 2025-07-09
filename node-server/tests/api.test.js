const request = require('supertest');
const app = require('../src/index');

describe('API Endpoints', () => {
  
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toContain('Welcome');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('status', 'OK');
      expect(res.body).toHaveProperty('timestamp');
    });
  });

  describe('Tasks API', () => {
    
    describe('GET /api/tasks', () => {
      it('should return all tasks', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('success', true);
        expect(res.body).toHaveProperty('data');
        expect(Array.isArray(res.body.data)).toBe(true);
      });
    });

    describe('GET /api/tasks/:id', () => {
      it('should return a specific task', async () => {
        const res = await request(app).get('/api/tasks/1');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('success', true);
        expect(res.body.data).toHaveProperty('id', 1);
      });

      it('should return 404 for non-existent task', async () => {
        const res = await request(app).get('/api/tasks/999');
        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty('success', false);
      });
    });

    describe('POST /api/tasks', () => {
      it('should create a new task', async () => {
        const newTask = {
          title: 'Test Task',
          completed: false
        };

        const res = await request(app)
          .post('/api/tasks')
          .send(newTask);

        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('success', true);
        expect(res.body.data).toHaveProperty('title', 'Test Task');
      });

      it('should return 400 if title is missing', async () => {
        const res = await request(app)
          .post('/api/tasks')
          .send({});

        expect(res.statusCode).toBe(400);
        expect(res.body).toHaveProperty('success', false);
      });
    });
  });

  describe('404 Handler', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app).get('/unknown-route');
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty('success', false);
    });
  });
});
