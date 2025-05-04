import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PropertyTablePaginationProps {
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  endIndex: number;
  setEndIndex: React.Dispatch<React.SetStateAction<number>>;
  totalRows: number;
  pageSize: number;
}

const PropertyTablePagination = ({
  startIndex,
  setStartIndex,
  endIndex,
  setEndIndex,
  totalRows,
  pageSize,
}: PropertyTablePaginationProps) => {
  const canPrev = startIndex > 0;
  const canNext = endIndex < totalRows;

  const handlePrev = () => {
    if (!canPrev) return;
    setStartIndex((prev: number) => Math.max(0, prev - pageSize));
    setEndIndex((prev: number) => Math.max(pageSize, prev - pageSize));
  };

  const handleNext = () => {
    if (!canNext) return;
    setStartIndex((prev: number) => prev + pageSize);
    setEndIndex((prev: number) => Math.min(totalRows, prev + pageSize));
  };
  return (
    <div className="w-full flex items-center justify-between cursor-default">
      {/* Row count */}
      <div className="text-sm text-zinc-500">
        {`${startIndex + 1}–${Math.min(
          endIndex,
          totalRows
        )} of ${totalRows} row${totalRows !== 1 ? "s" : ""}`}
      </div>

      {/* Pagination controls */}
      <Pagination className="w-fit">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrev}
              className={
                !canPrev ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>

          {/* Number pagination */}
          {Array.from({ length: Math.ceil(totalRows / pageSize) }).map(
            (_, index) => {
              const pageNumber = index + 1;
              const isCurrentPage = index === Math.floor(startIndex / pageSize);

              return (
                <PaginationItem key={index}>
                  <button
                    className={`h-9 w-9 rounded-md flex items-center justify-center cursor-pointer ${
                      isCurrentPage
                        ? "border border-primary text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={() => {
                      setStartIndex(index * pageSize);
                      setEndIndex(Math.min((index + 1) * pageSize, totalRows));
                    }}
                  >
                    {pageNumber}
                  </button>
                </PaginationItem>
              );
            }
          )}

          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={
                !canNext ? "pointer-events-none opacity-50" : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PropertyTablePagination;
