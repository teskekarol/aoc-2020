import days.Day1
import spock.lang.Specification

class Day1Spec extends Specification {

    def day1 = new Day1()

    def "should solve simple case"(){
        when:
        def result = day1.partOne()

        then:
        result == "KOTLIN IS GREAT"

    }
}
