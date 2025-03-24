import { ReportHandler } from "web-vitals";

const reportWebVitals: (onPerfEntry?: ReportHandler) => void = (
  onPerfEntry?: ReportHandler,
) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(
      ({
        getCLS,
        getFID,
        getFCP,
        getLCP,
        getTTFB,
      }: {
        getCLS: (onReport: ReportHandler, reportAllChanges?: boolean) => void;
        getFID: (onReport: ReportHandler, reportAllChanges?: boolean) => void;
        getFCP: (onReport: ReportHandler, reportAllChanges?: boolean) => void;
        getLCP: (onReport: ReportHandler, reportAllChanges?: boolean) => void;
        getTTFB: (onReport: ReportHandler) => void;
      }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      },
    );
  }
};

export default reportWebVitals;
