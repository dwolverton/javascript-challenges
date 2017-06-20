describe('parseMembers', function() {

    var parseMembers;

    beforeEach(module("jsExercises"));
    beforeEach(inject(function(_parseMembers_) {
        parseMembers = _parseMembers_;
    }));

    it('parses a lone email address', function() {
        expect(parseMembers('bob@lawblog.com')).toEqual([{
            email: 'bob@lawblog.com',
            name: null
        }]);
    });

    it('parses a bracketed email address', function() {
        expect(parseMembers('<bob@lawblog.com>')).toEqual([{
            email: 'bob@lawblog.com',
            name: null
        }]);
    });

    it('parses a bracketed email address and double quoted name', function() {
        expect(parseMembers('"Bob Loblaw" <bob@lawblog.com>')).toEqual([{
            email: 'bob@lawblog.com',
            name: 'Bob Loblaw'
        }]);
    });

    it('parses a bracketed email address and single quoted name', function() {
        expect(parseMembers("'Bob Loblaw' <bob@lawblog.com>")).toEqual([{
            email: 'bob@lawblog.com',
            name: 'Bob Loblaw'
        }]);
    });

    it('parses an email address and unquoted name', function() {
        expect(parseMembers("Bob Loblaw bob@lawblog.com")).toEqual([{
            email: 'bob@lawblog.com',
            name: 'Bob Loblaw'
        }]);
    });

    it('parses a bracketed email address and unquoted name', function() {
        expect(parseMembers("Bob Loblaw <bob@lawblog.com>")).toEqual([{
            email: 'bob@lawblog.com',
            name: 'Bob Loblaw'
        }]);
    });

    it('parses a quoted email address and unquoted name', function() {
        expect(parseMembers('Bob Loblaw "bob@lawblog.com"')).toEqual([{
            email: 'bob@lawblog.com',
            name: 'Bob Loblaw'
        }]);
    });

    it('parses when bracketed email is first', function() {
        expect(parseMembers('<bob@lawblog.com> "Bob Loblaw"')).toEqual([{
            email: 'bob@lawblog.com',
            name: 'Bob Loblaw'
        }]);
    });

    it('parses when email is first', function() {
        expect(parseMembers('bob@lawblog.com Bob Loblaw')).toEqual([{
            email: 'bob@lawblog.com',
            name: 'Bob Loblaw'
        }]);
    });

    it('cleans up whitespace in name', function() {
        expect(parseMembers('bob@lawblog.com Bob\t Loblaw')).toEqual([{
            email: 'bob@lawblog.com',
            name: 'Bob Loblaw'
        }]);
    });

    it('parses multiple items comma-separated', function() {
        expect(parseMembers('"Bob Loblaw" <bob@lawblog.com>, "Grant Chirpus" <grant@grandcircus.co>')).toEqual([
            { email: 'bob@lawblog.com', name: 'Bob Loblaw' },
            { email: 'grant@grandcircus.co', name: 'Grant Chirpus' }
        ]);
    });

    it('parses multiple items semicolon-separated', function() {
        expect(parseMembers('"Bob Loblaw" <bob@lawblog.com>; "Grant Chirpus" <grant@grandcircus.co>')).toEqual([
            { email: 'bob@lawblog.com', name: 'Bob Loblaw' },
            { email: 'grant@grandcircus.co', name: 'Grant Chirpus' }
        ]);
    });

    it('parses multiple items new-line-separated', function() {
        expect(parseMembers('"Bob Loblaw" <bob@lawblog.com>\n "Grant Chirpus" <grant@grandcircus.co>')).toEqual([
            { email: 'bob@lawblog.com', name: 'Bob Loblaw' },
            { email: 'grant@grandcircus.co', name: 'Grant Chirpus' }
        ]);
    });

    it('parses multiple items comma and new-line-separated', function() {
        expect(parseMembers('"Bob Loblaw" <bob@lawblog.com>,\n "Grant Chirpus" <grant@grandcircus.co>')).toEqual([
            { email: 'bob@lawblog.com', name: 'Bob Loblaw' },
            { email: 'grant@grandcircus.co', name: 'Grant Chirpus' }
        ]);
    });

    it('ignores commas in quotes', function() {
        expect(parseMembers('"Bob Loblaw" <bob@lawblog.com>,\n "Chirpus, Grant" <grant@grandcircus.co>')).toEqual([
            { email: 'bob@lawblog.com', name: 'Bob Loblaw' },
            { email: 'grant@grandcircus.co', name: 'Chirpus, Grant' }
        ]);
    });

});
