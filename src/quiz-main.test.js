const { createCategories } = require("./quiz-main");

test("createCategories returns an object with categories and answers", () => {
    expect(createCategories()).toBe('"CONTINENT": ["EUROPE", "ASIA", "AFRICA", "NORTH AMERICA", "SOUTH AMERICA", "ANTARTICA", "OCEANIA"], "COLOUR": ["RED", "BLUE", "GREEN", "PINK", "PURPLE"], "SPORT": ["TENNIS", "BASKETBALL", "FOOTBALL", "VOLLEYBALL", "HOCKEY"], "UK CITY": ["LONDON", "BIRMINGHAM", "MANCHESTER", "LIVERPOOL", "YORK"], "CODING LANGUAGE": ["PYTHON", "JAVASCRIPT", "JAVA", "TYPESCRIPT", "RUBY", "C"]');
});