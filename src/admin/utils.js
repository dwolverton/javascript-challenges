angular.module("jsExercises")
.factory("parseMembers", function() {
    function parseMembers(input) {
        // The (?=(?:[^\"]*\"[^\"]*\")*[^\"]*$) part of this regex ignores commas
        // inside of quotes. See https://stackoverflow.com/questions/1757065
        var items = input.split(/[\n,;]+(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/);

        items = items.map(parseOne).filter(function(item) {
            return item.email;
        });
        return items;
    }

    function parseOne(input) {
        var result = input.match(/[<'"]?([\w-\.]+@[\w-\.]+)[>'"]?/);
        if (!result) {
            return { email: null, name: null };
        }
        var email = result[1];
        var part1 = input.substring(0, result.index);
        var part2 = input.substring(result.index + result[0].length);

        var name = part2.length > part1.length ? part2 : part1;
        name = name.trim();
        name = name.replace(/^['"<‘’“”]|['"<‘’“”]$/g, '');
        name = name.replace(/\s+/g, ' ');

        return {
            email: email || null,
            name: name || null
        }
    }

    return parseMembers;
});
