import { createConsumer } from '@rails/actioncable';

const cable = createConsumer('ws://localhost:3000/cable');

export const createPostsSubscription = (callbacks: {
  connected: () => void;
  disconnected: () => void;
  received: (data: any) => void;
  rejected: () => void;
}) => {
  return cable.subscriptions.create('PostsChannel', {
    connected() {
      console.log('WebSocket connected to PostsChannel');
      callbacks.connected();
    },
    disconnected() {
      console.log('WebSocket disconnected from PostsChannel');
      callbacks.disconnected();
    },
    received(data) {
      console.log('Received data:', data);
      callbacks.received(data);
    },
    rejected() {
      console.error('WebSocket connection rejected');
      callbacks.rejected();
    },
  });
};

export default cable;
