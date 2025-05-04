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
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PropertyTablePagination = ({
  startIndex,
  setStartIndex,
  endIndex,
  setEndIndex,
  totalRows,
  pageSize,
  currentPage,
  setCurrentPage,
}: PropertyTablePaginationProps) => {
  const canPrev = startIndex > 0;
  const canNext = endIndex < totalRows;

  const handlePrev = () => {
    if (!canPrev) return;
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
    setStartIndex((newPage - 1) * pageSize);
    setEndIndex(newPage * pageSize);
  };

  const handleNext = () => {
    if (!canNext) return;
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    setStartIndex((newPage - 1) * pageSize);
    setEndIndex(Math.min(newPage * pageSize, totalRows));
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
              const isCurrentPage = pageNumber === currentPage;

              return (
                <PaginationItem key={index}>
                  <button
                    className={`h-9 w-9 rounded-md flex items-center justify-center cursor-pointer ${
                      isCurrentPage
                        ? "border border-primary text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={() => {
                      setCurrentPage(pageNumber);
                      setStartIndex((pageNumber - 1) * pageSize);
                      setEndIndex(Math.min(pageNumber * pageSize, totalRows));
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
