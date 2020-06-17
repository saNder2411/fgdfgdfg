import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalyses } from './analyzers/WinsAnalyses';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';


const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const winsAnalyses = new WinsAnalyses('Man United');
const consoleReport = new ConsoleReport();

const summary = new Summary(winsAnalyses, consoleReport);

summary.bindAndPrintReport(matchReader.matches);