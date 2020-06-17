import { MatchResult } from './MatchResult';
import { HTMLReport } from './reportTargets/HTMLReport';
import { WinsAnalyses } from './analyzers/WinsAnalyses';
import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {

  static winsAnalysesWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalyses(team),
      new HTMLReport(),
    );
  }


  output: string = ``;

  constructor(
    private analyzer: Analyzer,
    private outputTarget: OutputTarget) {}

  bindAndPrintReport(matches: MatchData[]) {
    this.output = this.analyzer.run(matches);
    this.outputTarget.print(this.output);

  }
}