export class SingletonObject {
  private static instance: SingletonObject;

  public static getInstance(): SingletonObject {
    if (!SingletonObject.instance) {
      SingletonObject.instance = new SingletonObject();
    }
    return SingletonObject.instance;
  }
}
