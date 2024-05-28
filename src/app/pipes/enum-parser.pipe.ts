import { Pipe, PipeTransform } from '@angular/core';

@Pipe
({
  name: 'enumParser'
})
export class EnumParserPipe implements PipeTransform
{
  transform(value: string): string
  {
    if (!value)
    {
      return "";
    }

    return value.split("_")
                .map(word =>
                {
                  if (word.length === 1)
                  {
                    return word.toUpperCase();
                  }
                  else
                  {
                    return word.substring(0, 1).toUpperCase().concat(word.substring(1).toLowerCase());
                  }
                })
                .join(" ");
  }
}