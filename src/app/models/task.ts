export class Task {
  /**
   * Identifier of the task
   */
  public id: number;
  /**
   * Description of the task
   */
  public description: String;

  /**
   * Date of creation
   */
  public dateCreation: Date;

  constructor(id: number, description: String) {
    this.id = id;
    this.description = description;
    this.dateCreation = new Date();
  }
}
