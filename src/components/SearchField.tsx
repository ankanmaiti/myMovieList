import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function SearchField() {
  const [, setSearchParams] = useSearchParams();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query");

    setSearchParams({
      query: String(query),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex my-5">
      <Input type="text" name="query" className="sm:text-xl" />

      <Button type="submit" role="form" variant="outline" className="ms-1">
        <MagnifyingGlassIcon className="scale-150" />
      </Button>
    </form>
  );
}
