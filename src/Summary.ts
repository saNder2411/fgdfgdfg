import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  data: string = ``;
  constructor(
    private analyzer: Analyzer,
    private outputTarget: OutputTarget) {}

  bindAndPrintReport(matches: MatchData[]) {
    this.data = this.analyzer.run(matches);
    this.outputTarget.print(this.data);

  }
}