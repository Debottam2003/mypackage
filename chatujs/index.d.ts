declare const team: string[];

declare function randomInt(upperLimit: number): number;

declare function randomFloat(upperLimit: number): number;

declare function randomChoice<T>(arr: T[]): T;

declare function randomId(): string;

export { team, randomInt, randomFloat, randomChoice, randomId };
export default team;
