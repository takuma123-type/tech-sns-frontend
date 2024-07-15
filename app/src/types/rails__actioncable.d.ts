declare module '@rails/actioncable' {
  export function createConsumer(url: string): Cable;

  interface Cable {
    subscriptions: Subscriptions;
  }

  interface Subscriptions {
    create(channel: string | ChannelNameWithParams, mixin: Mixin): Subscription;
  }

  interface ChannelNameWithParams {
    channel: string;
    [key: string]: any;
  }

  interface Mixin {
    connected?(): void;
    disconnected?(): void;
    received?(data: any): void;
    rejected?(): void; // ここにrejectedメソッドを追加
  }

  interface Subscription {
    unsubscribe(): void;
  }
}